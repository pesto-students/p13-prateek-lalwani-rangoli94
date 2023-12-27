
import { BookList } from './BookList'
import { WithLogging } from './WithLogging'

function App() {
  return (
    <div className="App">
      <WithLogging>
        <BookList />
      </WithLogging>
      
    </div>
  );
}

export default App;
