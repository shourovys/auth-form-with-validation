import { notification } from "antd";

const key = 'updatable';

const openNotification = ( title, description) => {
  notification.open({
    key,
    message: title,
    description: description,
  });
};

export default openNotification;
