import { Logo } from './widget/components/logo.tsx';
import { WidgetContainer } from './widget/components/widget-container.tsx';
import './widget/styles/style.css';

function App() {
  return (
    <>
      <Logo width={200} height={200} />
      <WidgetContainer clientKey={'test-key'} />
    </>
  );
}

export default App;