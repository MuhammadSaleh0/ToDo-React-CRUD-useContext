import Classes from './CSS/main/Card.module.css';
import Card from './components/UI/Card';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TaskItem from './components/TaskItem';
import FormEdit from './components/Input/FormEdit';
import DataContextProvider from './store/DataContextProvider';
import { useEffect, useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [clicked, isClicked] = useState(false);

  useEffect(() => {
    const colorState = localStorage.getItem('colorState');
    if (colorState === 'false') {
      setIsDark((prevstate) => !prevstate);
    }
  }, []);

  const changeColorHnadler = () => {
    setIsDark((prevstate) => !prevstate);
    localStorage.setItem('colorState', isDark);
  };

  const showFormHandler = () => {
    isClicked(true);
  };
  const closeFormHnadler = () => {
    isClicked(false);
  };

  return (
    <DataContextProvider>
      <Card className={isDark && Classes['Card-dark']}>
        <Header onChangeColor={changeColorHnadler} />
        <Input />
        <>
          {clicked && <FormEdit closeForm={closeFormHnadler} />}
          <TaskItem showForm={showFormHandler} />
        </>
      </Card>
    </DataContextProvider>
  );
}

export default App;
