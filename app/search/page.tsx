import React from 'react'
import ShowResults from './components/ShowResults'


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>


const SearchResultPage = async ({ searchParams }: {
    searchParams: SearchParams
}) => {

    const searchParam = await searchParams
    return (
        <ShowResults params={searchParam} />
    )
}

export default SearchResultPage