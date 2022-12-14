import { Fragment, useContext } from "react";
import SearchBar from "../SearchBar";
import GameResults from "../GameResults";

import { ResultContext } from "../../contexts/result.context";

const Search = () => {
    const { results } = useContext(ResultContext);
    return (
        <Fragment>
            {results.length === 0 ? (
                <SearchBar/>
            ) : (
                <GameResults/>
            )}
        </Fragment>
    )
}

export default Search;