import { LogoName } from './components/commons/LogoName'
import { Title } from './components/commons/Title'
import { SearchButton } from './components/commons/SearchButton'
import { NavegationBar } from './components/commons/NavegationBar'
import { SearchBar } from './components/commons/SearchBar'



export function SearchABook() {
    return <div className="p-5">
        <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

        <Title>Search a book</Title>

        <div>
            <SearchButton></SearchButton>

            <SearchBar></SearchBar>

            <NavegationBar></NavegationBar>
        </div>
    </div>
}