import '@styles/layout/the-loader.css';

function TheLoader() {
  return (
    <div className='loader-container'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default TheLoader;
