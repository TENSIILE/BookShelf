import { Button } from '@/components'
import { ListBooks } from '@/components/layouts'
import './mainPage.scss'

export const MainPage = () => {
  return (
    <div className='main-page'>
      <h1>Список всех книг</h1>
      <hr />
      <Button.Link className='main-page__btn-added btn--primary' to='/add'>
        Добавить книгу
      </Button.Link>
      <ListBooks />
    </div>
  )
}
