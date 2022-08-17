const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // discussions =[];

    // console.dir('경로 test-여기는 목록')

    //   discussionsData.map(discussion => {
    //   discussions.push(discussion)
    //   // return discussion 
    // })
    // // TODO: 모든 discussions 목록을 응답합니다.
    // res.send(discussions)

      res.send(discussionsData)
  },
//---------------------------------------------------------------------------------------//
  // proto.process_params = function process_params(layer, called, req, res, done) {
  //   var params = this.params;
  
  //   // captured parameters from the layer, keys and values
  //   var keys = layer.keys;
  
  //   // fast track
  //   if (!keys || keys.length === 0) {
  //     return done();
  //   }
  
  //   var i = 0;
  //   var name;
  //   var paramIndex = 0;
  //   var key;
  //   var paramVal;
  //   var paramCallbacks;
  //   var paramCalled;
  
  //   // process params in order
  //   // param callbacks can be async
  //   function param(err) {
  //     if (err) {
  //       return done(err);
  //     }
  
  //     if (i >= keys.length ) {
  //       return done();
  //     }
  
  //     paramIndex = 0;
  //     key = keys[i++];
  //     name = key.name;
  //     paramVal = req.params[name];
  //     paramCallbacks = params[name];
  //     paramCalled = called[name];
  
  //     if (paramVal === undefined || !paramCallbacks) {
  //       return param();
  //     }
  
  //     // param previously called with same value or error occurred
  //     if (paramCalled && (paramCalled.match === paramVal
  //       || (paramCalled.error && paramCalled.error !== 'route'))) {
  //       // restore value
  //       req.params[name] = paramCalled.value;
  
  //       // next param
  //       return param(paramCalled.error);
  //     }
  
  //     called[name] = paramCalled = {
  //       error: null,
  //       match: paramVal,
  //       value: paramVal
  //     };
  
  //     paramCallback();
  //   }
  
  //   // single param callbacks
  //   function paramCallback(err) {
  //     var fn = paramCallbacks[paramIndex++];
  
  //     // store updated value
  //     paramCalled.value = req.params[key.name];
  
  //     if (err) {
  //       // store error
  //       paramCalled.error = err;
  //       param(err);
  //       return;
  //     }
  
  //     if (!fn) return param();
  
  //     try {
  //       fn(req, res, paramCallback, paramVal, key.name);
  //     } catch (e) {
  //       paramCallback(e);
  //     }
  //   }
  
  //   param();
  // };
//---------------------------------------------------------------------------------------//
// module.exports = Layer;

// function Layer(path, options, fn) {
//   if (!(this instanceof Layer)) {
//     return new Layer(path, options, fn);
//   }

//   debug('new %o', path)
//   var opts = options || {};

//   this.handle = fn;
//   this.name = fn.name || '<anonymous>';
//   this.params = undefined;
//   this.path = undefined;
//   this.regexp = pathRegexp(path, this.keys = [], opts);

//   // set fast path flags
//   this.regexp.fast_star = path === '*'
//   this.regexp.fast_slash = path === '/' && opts.end === false
// }

// /**
//  * Handle the error for the layer.
//  *
//  * @param {Error} error
//  * @param {Request} req
//  * @param {Response} res
//  * @param {function} next
//  * @api private
//  */

// Layer.prototype.handle_error = function handle_error(error, req, res, next) {
//   var fn = this.handle;

//   if (fn.length !== 4) {
//     // not a standard error handler
//     return next(error);
//   }

//   try {
//     fn(error, req, res, next);
//   } catch (err) {
//     next(err);
//   }
// };

// /**
//  * Handle the request for the layer.
//  *
//  * @param {Request} req
//  * @param {Response} res
//  * @param {function} next
//  * @api private
//  */

// Layer.prototype.handle_request = function handle(req, res, next) {
//   var fn = this.handle;

//   if (fn.length > 3) {
//     // not a standard request handler
//     return next();
//   }

//   try {
//     fn(req, res, next);
//   } catch (err) {
//     next(err);
//   }
// };

// /**
//  * Check if this route matches `path`, if so
//  * populate `.params`.
//  *
//  * @param {String} path
//  * @return {Boolean}
//  * @api private
//  */

// Layer.prototype.match = function match(path) {
//   var match

//   if (path != null) {
//     // fast path non-ending match for / (any path matches)
//     if (this.regexp.fast_slash) {
//       this.params = {}
//       this.path = ''
//       return true
//     }

//     // fast path for * (everything matched in a param)
//     if (this.regexp.fast_star) {
//       this.params = {'0': decode_param(path)}
//       this.path = path
//       return true
//     }

//     // match the path
//     match = this.regexp.exec(path)
//   }

//   if (!match) {
//     this.params = undefined;
//     this.path = undefined;
//     return false;
//   }

//   // store values
//   this.params = {};
//   this.path = match[0]

//   var keys = this.keys;
//   var params = this.params;

//   for (var i = 1; i < match.length; i++) {
//     var key = keys[i - 1];
//     var prop = key.name;
//     var val = decode_param(match[i])

//     if (val !== undefined || !(hasOwnProperty.call(params, prop))) {
//       params[prop] = val;
//     }
//   }

//   return true;
// };

// /**
//  * Decode param value.
//  *
//  * @param {string} val
//  * @return {string}
//  * @private
//  */

// function decode_param(val) {
//   if (typeof val !== 'string' || val.length === 0) {
//     return val;
//   }

//   try {
//     return decodeURIComponent(val);
//   } catch (err) {
//     if (err instanceof URIError) {
//       err.message = 'Failed to decode param \'' + val + '\'';
//       err.status = err.statusCode = 400;
//     }

//     throw err;
//   }
// }
//---------------------------------------------------------------------------------------//

  findById: (req, res) => {
    const { id } = req.params //** param...으로 적어놨어... 아놔... 잊어먹지말길...
    // discussions =[];
    // body =[]
    const finddata = discussionsData.find((data) => data.id === Number(id)) //** String... 생각못했다... 잊지말자..ㅠ
    // find() 메소드 존재를 오늘 알게되었다.ㅎㅎ 자주 쓰일거같으니 필히 기억하자.
    // 아래 filter()와 find() 차이점
    // filter는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
    // find()는 배열안에서 주어진 판별 함수를 만족하는 첫 번째 요소를 반환함 없으면 undifined.
    if(finddata){
    return res.status(200).json(finddata)
      }else{
        return res.status(404).send("Sorry cant find that!")}
  
      },
    }



    // if(req){
    //   body.push(req)
    //   res.status(200)
    // }
    // console.dir(`${body}`)

    // if(discussionsData){
    //   discussionsData.map(discussion => {
    //   discussion.id === req.body.key
    //   discussions.push(req.body.key)
    //   // return discussion 
    // })}
    // console.dir(`${discussions}`)

    // if(req.body.id !== undefined && discussionsData.id === req.body.id){
    //   res.status(200).send(req.body.id)
    // }
    // if(!( discussionsData.id)){
    //   res.sendStatus(404)
    // }
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.


module.exports = {
  discussionsController,
};
