import './App.css'
import { useLayout } from './contexts/layoutContext'
import Loading from './layouts/Loading/Loading'
import Upload from './layouts/Upload/Upload'
import Uploaded from './layouts/Uploaded/Uploaded'

function App() {
  const { loading, layout } = useLayout()

  return (
    <div className="App">
      {
        loading === true ? <Loading />
        : layout === 'Upload' ? <Upload /> 
        : layout === 'Uploaded' && <Uploaded />
      }
    </div>
  )
}

export default App
