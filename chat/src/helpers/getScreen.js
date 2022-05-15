import { chatStages } from '../models';
import { Chat } from '../components/Chat/Chat';
import { About } from '../components/About/About';

function getComponent(screen) {
  switch (screen) {
    case chatStages.chat:
      return Chat;
    case chatStages.about:
      return About;
    default:
      return About;
  }
}

export default getComponent;