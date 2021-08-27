export const controllerMiddleware = configs => state => next => action => {
    if ( configs[action.type]) {
      try {
        let result = configs[action.type](state, action);
        return result
      } catch ( err ) {
          return err;
      }
    } else {
      return next(action)
    }
 };
  