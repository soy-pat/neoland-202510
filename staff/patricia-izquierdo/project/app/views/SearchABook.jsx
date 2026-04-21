import { useState } from 'react'
import { LogoName } from './components/commons/LogoName'
import { Title } from './components/commons/Title'
import { SearchButton } from './components/commons/SearchButton'
import { NavegationBar } from './components/commons/NavegationBar'
import { SearchBar } from './components/commons/SearchBar'
import { Form } from './components/commons/Form'
import { FoundReviewList } from './components/FoundReviewList'

export function SearchABook() {
    const [titleSearch, setTitleSearch] = useState('')

    const handleSearchSubmit = event => {
        event.preventDefault()

        const form = event.target

        const title = form.searchInput.value

        setTitleSearch(title)
    }

    return <div className="p-5">
        <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

        <Title>Search a book</Title>

        <Form onSubmit={handleSearchSubmit} className='flex flex-row'>
            <SearchButton type='submit'></SearchButton>

            <SearchBar alias="searchInput"></SearchBar>
        </Form>

        <NavegationBar></NavegationBar>

        {titleSearch && <FoundReviewList titleSearched={titleSearch} />}
    </div>
}