import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './components/form/FormComponent';
import TitleComponent from './components/title/TitleComponent';


function App() {
  return (
    <div className="container">
      <TitleComponent />
      <FormComponent />
    </div>
  );
}

export default App;
