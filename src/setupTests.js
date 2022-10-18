// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

{
  loading ? (
    <h4>Loading ...</h4>
  ) : (
    posts
      .filter((value) => {
        if (searchTitle === "") {
          return value;
        } else if (
          value.title.toLowerCase().includes(searchTitle.toLowerCase())
        ) {
          return value;
        }
      })
      .map((item) => <h5 key={item.id}>{item.title}</h5>)
  );
}
