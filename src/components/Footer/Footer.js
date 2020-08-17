// This component renders the pagination at the bottom of the screen.
import React, { useContext } from 'react';
import AppContext from '../../data/AppContext';
import { Pagination } from 'carbon-components-react';
import Actions from '../../data/Actions';
import { search } from '../../data/SearchUtil';

function updatePagination(state, dispatch, pageData) {
  // Update the state for the page data.
  dispatch({ type: Actions.UPDATE_PAGINATION, pageData });

  let page = state.pageSize !== pageData.pageSize ? 1 : pageData.page;
  let searchData = { ...state, page, pageSize: pageData.pageSize };

  // Perform another search based on the update page info.
  search(dispatch, searchData);
}

const Footer = () => {
  const { dispatch, state } = useContext(AppContext);

  return (
    <footer className="footer__container">
      <div className="footer__pagination_container">
        <Pagination
          onChange={updatePagination.bind(this, state, dispatch)}
          backwardText="Previous page"
          forwardText="Next page"
          itemsPerPageText="Photos per page:"
          page={state.page}
          pageNumberText="Page Number"
          pageSize={state.pageSize}
          pageSizes={[20, 50, 100]}
          totalItems={state.total}
        />
      </div>
    </footer>
  );
};

export default Footer;
