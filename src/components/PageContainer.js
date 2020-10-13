import React, { useState } from 'react';
import FirstPage from '../pages/FirstPage';
import ThirdPage from '../pages/ThirdPage';
import SecondPage from '../pages/SecondPage';

const pageHandler = (pageNumber) => {
    switch (pageNumber) {
        case 1: return <FirstPage />
        case 2: return <SecondPage />
        case 3: return <ThirdPage />
        default: return <div>Invalid page</div>
    }
}


function PageContainer() {
    const [pageNumber, setPageNumber] = useState(1);
    const buttonClickHandler = () => {
        setPageNumber(pageNumber + 1);
    }
    return (
        <React.Fragment>
            {pageHandler(pageNumber)}
            <button
                onClick={buttonClickHandler}
            >Next</button>
        </React.Fragment>
    )
}

export default PageContainer;
