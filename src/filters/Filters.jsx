import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from './filtersAction';
import './filtersStyles/Filters.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFieldError = {
    name: handleNameField,
    age: handleAgeField,
  };

  function checkName(value, pattern) {
    const matchPattern = value.match(pattern);
    return {
      isValidName: Boolean(!matchPattern || matchPattern[0] !== matchPattern.input),
      matchPattern
    }
  }

  function handleNameField(event) {
    const target = event.target;
    const value = target.value;
    const classList = target.classList;
    const attributes = target.attributes;
    const patternValue = attributes.pattern.value;

    const { isValidName, matchPattern } = checkName(value, patternValue);

    isValidName ? classList.add('wrong-value') : classList.remove('wrong-value');
    event.target.value = isValidName
      ? matchPattern
        ? matchPattern[0]
        : ''
      : value;
  }

  function handleAgeField(event) {
    const target = event.target;
    const classList = target.classList;

    const isValid = target.validity.valid;

    isValid ? classList.remove('wrong-value') : classList.add('wrong-value');
  }

  function onChange(event) {
    handleFieldError[event.target.name] && handleFieldError[event.target.name](event);
    hasValue(event);
  }

  function hasValue(event) {
    const target = event.target;
    const targetValue = target.value;
    const classList = target.classList;

    targetValue ? classList.add('has-value') : classList.remove('has-value');
  }

  function onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target;
    const formData = new FormData(form);

    let filters = {}

    for (let [key, value] of formData) {
      filters[key] = value;
    }

    dispatch(setFilters(filters));
  }

  return (
    <div className="mb16" style={{ width: '100%' }}>
      <form onSubmit={onSubmit} className="flex flex-row flex-items-center flex-content-center">
        <div className="mr16 field-container position-relative">
          <input onChange={onChange} id="name" type="text" pattern="[A-Za-z]([A-Za-z]|[' '](?=[A-Za-z]))+|[A-Za-z]" name="name"/>
          <span/>
          <label className="position-absolute fs15" htmlFor="name"> Name </label>
        </div>
        <div className="mr16 field-container position-relative">
          <input onChange={onChange} id="position" type="text" name="position"/>
          <span/>
          <label className="position-absolute fs15" htmlFor="position"> Position </label>
        </div>
        <div className="mr16 field-container position-relative">
          <input onChange={onChange} id="age" type="number" min="18" max="40" name="age"/>
          <span/>
          <label className="position-absolute fs15" htmlFor="age"> Age </label>
        </div>
          <input type="submit"/>
      </form>
    </div>
  );
}

export default Filter;