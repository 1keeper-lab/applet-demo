

var navigation;

const init = (nav) => {
    navigation = nav;
}

const push = (page,params) => {
    navigation.push(page,params);
}

const pop = () => {
    navigation.pop();
}

const popToRoot = () =>{
    navigation.popToRoot();
}

const replace = (page) => {
    navigation.setStackRoot(page);
}

export default {
  init,
  push,
  pop,
  popToRoot,
  replace
};