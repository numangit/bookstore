import './App.css'
import AddBook from './components/bookStore/AddBook'
import BookList from './components/bookStore/BookList'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main class="py-12 2xl:px-6">
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookList />
          <AddBook />
        </div>
      </main>
    </div>
  )
}

export default App