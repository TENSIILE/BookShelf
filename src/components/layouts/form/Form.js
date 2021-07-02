import { useContext } from 'react'
import { LogicBookShelf } from '@/contexts/logicBookShelf'
import { Input, Button } from '@/components'
import classnames from '@/utils/helpers/classnames'
import './form.scss'

export const Form = ({ isEdit }) => {
  const logic = useContext(LogicBookShelf)

  return (
    <div className='form'>
      <div className='form__input'>
        <Input
          placeholder='Введите название книги'
          state={logic.inputState.title}
          setState={logic.onChangeInput}
          name='title'
        />
        <Input
          placeholder='Введите ФИО автора'
          state={logic.inputState.fullnameAuthor}
          setState={logic.onChangeInput}
          name='fullnameAuthor'
        />
        <Input
          type='number'
          placeholder='Введите год выпуска книги'
          number={{ min: 0, max: 2017 }}
          className='w-25 text-center'
          state={logic.inputState.yearRelease}
          setState={logic.onChangeInput}
          name='yearRelease'
        />
        <Input
          placeholder='Введите ссылку на изображение'
          state={logic.inputState.imageUrl}
          setState={logic.onChangeInput}
          name='imageUrl'
        />
        <img
          className={classnames('form__image', {
            'form__image--loaded': !!logic.inputState.imageUrl,
          })}
          src={logic.inputState.imageUrl}
          alt=''
        />
      </div>
      <div className='form__buttons'>
        {isEdit ? (
          <Button className='btn--primary' onClick={logic.onEditDoneBook}>
            Изменить
          </Button>
        ) : (
          <Button className='btn--success' onClick={logic.onAddNewBook}>
            Создать
          </Button>
        )}

        <Button className='btn--warning' onClick={logic.onCancelAction}>
          Отменить
        </Button>
      </div>
    </div>
  )
}
