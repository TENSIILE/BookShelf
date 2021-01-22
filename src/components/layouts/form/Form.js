import { Input, Button } from '../..'
import './form.scss'

export const Form = ({ isEdit }) => (
    <div className="form">
        <div className="form__input">
            <Input placeholder='Введите название книги'/>
            <Input placeholder='Введите ФИО автора'/>
            <Input type='number' number={{min: 0, max: 2017}} className='w-25 text-center'/>
            <Input placeholder='Введите ссылку на изображение'/>
            <img className='form__image' src="" alt=""/>
        </div>
        <div className="form__buttons">
            {
                isEdit ? 
                <Button className='btn--primary'>Изменить</Button> : 
                <Button className='btn--success'>Создать</Button>
            }
            <Button.Link to='/' className='btn--warning'>Отменить</Button.Link>
        </div>
    </div>
)