import {Form} from '@/components/layouts';
import './editPage.scss';

export const EditPage = () => {
  return (
    <div className="edit-page">
      <h1>Редактирование книги</h1>
      <hr />
      <Form isEdit={true} />
    </div>
  );
};
