import React, {useState} from "react";
import classes from "./Users.module.css"

let Paginator = props => {



    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/props.pagePortionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.pagePortionSize + 1;
    let rightPortionPageNumber = portionNumber * props.pagePortionSize;

    let onPageChanged = (page) => {
        props.onPageChanged(page)
    }

    return (
        <div className={classes.page}>
            {portionNumber > 1 ?
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button> : null}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(page => {
                    console.log(page)
                    return <span
                        className={page === props.currentPage ? classes.selectedPage: classes.page}
                        key={page}
                        onClick={(e) => {
                            onPageChanged(page)
                        }}>{page}</span>
                })}
            {portionCount > portionNumber ?
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button> : null}
        </div>
    )
}

export default Paginator;