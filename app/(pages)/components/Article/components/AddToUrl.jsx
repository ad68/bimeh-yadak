const addNumberToUrl = (url, number) => {
  const parsedUrl = new URL(url);
  const filename = parsedUrl.pathname.split("/").pop();
  const extension = filename.split(".").pop();
  const newFilename = `${filename.split(".")[0]}-${number}.${extension}`;
  parsedUrl.pathname = parsedUrl.pathname.replace(filename, newFilename);

  return parsedUrl.toString();
};

const App = () => {
  const [url, setUrl] = useState("https://example.com/image.jpg");
  const [number, setNumber] = useState(1);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUrl = addNumberToUrl(url, number);
    /*   console.log(newUrl); */
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={url}
          onChange={handleUrlChange}
        />

        <label htmlFor="number">عدد:</label>
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={handleNumberChange}
        />

        <button type="submit">اضافه کردن عدد</button>
      </form>
    </div>
  );
};
