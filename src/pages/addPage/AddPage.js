import { Form } from '../../components/layouts'
import './addPage.scss'

export const AddPage = () => {
    return (
        <div className="add-page">
            <h1>Добавление новой книги</h1>
            <hr/>
            <Form/>
        </div>
    )
}