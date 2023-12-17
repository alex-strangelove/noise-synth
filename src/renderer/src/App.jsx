const App = () => {
  const ping = async () => {
    // Send a message to the main process with the response asynchronously
    window.electron.ipcRenderer.invoke('electron:doAThing', '').then((re) => {
      console.log(re)
    })
  }

  return (
    <div>
      <button onClick={ping}>Hello</button>
    </div>
  )
}

export default App
