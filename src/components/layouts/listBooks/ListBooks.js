import { Button, Badge } from '../../'
import './listBooks.scss'

export const ListBooks = () => {
    return (
        <div className="list-books">
            <div className="list-books__item">
                <img className="list-books__img" src="http://www.getsready.com/wp-content/uploads/2016/06/an-awesome-scenery-at-boston.jpg" alt=""/>
                <div className="list-books__texts">
                    <h2 className='list-books__title'>JavaScript</h2>
                    <p className='list-books__author'>А.А Пушкин</p>
                    <Badge className='list-books__date badge--danger'>2016г</Badge>
                </div>
                <div className="list-books__control">
                    <Button.Link 
                        to='/edit'
                        className='btn--primary'
                    >
                        Редактировать
                    </Button.Link>
                    <Button className='btn--danger'>Удалить</Button>
                </div>
            </div>
        </div>
    )
}