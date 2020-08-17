// This component renders the date sort order.
import React, { useContext } from 'react';

import { RadioButton, RadioButtonGroup } from 'carbon-components-react';
import AppContext from '../../data/AppContext';
import Actions from '../../data/Actions';

const SortOrder = () => {
  const { dispatch, state } = useContext(AppContext);

  return (
    <RadioButtonGroup
      name="sortDirection"
      className="sort__container"
      orientation="vertical"
      valueSelected={state.sortDirection}
      onChange={sortDirection =>
        dispatch({ type: Actions.UPDATE_SORT, sortDirection })
      }>
      <RadioButton value="ascending" id="radio-1" labelText="Ascending" />
      <RadioButton value="descending" id="radio-2" labelText="Descending" />
    </RadioButtonGroup>
  );
};

export default SortOrder;
