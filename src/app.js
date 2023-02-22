window.onload = function() {
  let newDomain = [];
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const domain = [".com", ".net", ".es"];

  function getDomain() {
    pronoun.forEach(element1 => {
      adj.forEach(element2 => {
        noun.forEach(element3 => {
          domain.forEach(element4 => {
            //console.log(`${element1}${element2}${element3}${element4}`);
            let div = document.createElement("div");
            div.innerText = `
          ${element1}${element2}${element3}${element4}
          `;
            document.body.appendChild(div);
          });
        });
      });
    });
  }
  getDomain();
};
