import {Form} from '@/components/layouts';
import './edit-page.scss';

export const EditPage = () => {
  return (
    <div className="edit_page">
      <h1>Редактирование книги</h1>
      <hr />
      <Form isEdit={true} />
    </div>
  );
};
