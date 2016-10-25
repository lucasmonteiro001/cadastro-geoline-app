var require = meteorInstall({"imports":{"api":{"pesquisas":{"server":{"methods.js":["./../pesquisas.js","meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/pesquisas/server/methods.js                                                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Pesquisas;module.import("./../pesquisas.js",{"Pesquisas":function(v){Pesquisas=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                                                                // 2
                                                                                                                //
Meteor.methods({                                                                                                // 4
    'pesquisas.sincronizar': function pesquisasSincronizar() {                                                  // 5
                                                                                                                //
        console.warn('Nesse momento, os dados devem ser sincronizados com o servidor, conferidos e então' + ' apagar a collection local!');
                                                                                                                //
        Pesquisas.remove({});                                                                                   // 10
    },                                                                                                          // 12
    'pesquisas.insertDummy': function pesquisasInsertDummy() {                                                  // 13
        Pesquisas.insert({                                                                                      // 14
            entrevistadores: ['entrevistador1-id'],                                                             // 15
            status: 'aberta',                                                                                   // 16
            bairros: ['bairro1', 'bairro2'],                                                                    // 17
            entrevistas: [{                                                                                     // 18
                bairro: "bairro1",                                                                              // 20
                dataHora: new Date().valueOf(), // timestamp                                                    // 21
                localizacao: {                                                                                  // 22
                    latitude: 1,                                                                                // 23
                    longitutde: 1                                                                               // 24
                }                                                                                               // 22
            }, {                                                                                                // 19
                bairro: "bairro1",                                                                              // 28
                dataHora: new Date().valueOf(), // timestamp                                                    // 29
                localizacao: {                                                                                  // 30
                    latitude: 1,                                                                                // 31
                    longitutde: 1                                                                               // 32
                }                                                                                               // 30
            }, {                                                                                                // 27
                bairro: "bairro2",                                                                              // 36
                dataHora: new Date().valueOf(), // timestamp                                                    // 37
                localizacao: {                                                                                  // 38
                    latitude: 1,                                                                                // 39
                    longitutde: 1                                                                               // 40
                }                                                                                               // 38
            }]                                                                                                  // 35
        });                                                                                                     // 14
    },                                                                                                          // 45
    'pesquisas.insert': function pesquisasInsert(dataObj) {                                                     // 46
                                                                                                                //
        // dataObj.userId = Meteor.userId();                                                                    //
                                                                                                                //
        console.warn('implementar pesquisas.insert');return;                                                    // 50
                                                                                                                //
        // check(dataObj, Pesquisas.simpleSchema());                                                            //
                                                                                                                //
        Pesquisas.insert(dataObj, function (error) {                                                            // 54
            if (error) {                                                                                        // 55
                console.log(error);                                                                             // 56
            }                                                                                                   // 57
        });                                                                                                     // 58
    },                                                                                                          // 59
    'pesquisas.update': function pesquisasUpdate(id, dataObj) {                                                 // 60
                                                                                                                //
        console.warn('implementar pesquisas.update');return;                                                    // 62
                                                                                                                //
        // check(id, String);                                                                                   //
        // check(dataObj, Pesquisas.simpleSchema());                                                            //
                                                                                                                //
        Pesquisas.update(id, {                                                                                  // 67
            $set: dataObj                                                                                       // 68
        });                                                                                                     // 67
    },                                                                                                          // 70
    'pesquisas.delete': function pesquisasDelete(id) {                                                          // 71
                                                                                                                //
        console.warn('implementar pesquisas.insert');return;                                                    // 73
        // check(id, String);                                                                                   //
        Pesquisas.remove(id);                                                                                   // 75
    }                                                                                                           // 76
});                                                                                                             // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"publications.js":["babel-runtime/helpers/typeof","../pesquisas.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/pesquisas/server/publications.js                                                                 //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _typeof;module.import("babel-runtime/helpers/typeof",{"default":function(v){_typeof=v}});var Pesquisas;module.import("../pesquisas.js",{"Pesquisas":function(v){Pesquisas=v}});
                                                                                                                // 1
                                                                                                                //
Meteor.publish('Pesquisas', function (filter, projection) {                                                     // 3
                                                                                                                //
    projection || (projection = {});                                                                            // 5
                                                                                                                //
    filter || (filter = {});                                                                                    // 7
                                                                                                                //
    // se existe um filtro                                                                                      //
    if ((typeof filter === "undefined" ? "undefined" : _typeof(filter)) === "object") {                         // 10
                                                                                                                //
        if (Object.keys(projection).length === 0) {                                                             // 12
                                                                                                                //
            if (Object.keys(filter).length === 0) {                                                             // 14
                                                                                                                //
                return Pesquisas.find();                                                                        // 16
            } else {                                                                                            // 17
                                                                                                                //
                return Pesquisas.find(filter);                                                                  // 19
            }                                                                                                   // 20
        } else {                                                                                                // 21
            return Pesquisas.find(filter, { fields: projection });                                              // 23
        }                                                                                                       // 24
    } else {                                                                                                    // 25
        return null;                                                                                            // 27
    }                                                                                                           // 28
});                                                                                                             // 29
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"pesquisas.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/pesquisas/pesquisas.js                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({Pesquisas:function(){return Pesquisas}});var Pesquisas = new Ground.Collection('pesquisas', { connection: null });
                                                                                                                //
// var Api = new Restivus({                                                                                     //
//     useDefaultAuth: true,                                                                                    //
//     prettyJson: true                                                                                         //
// });                                                                                                          //
                                                                                                                //
// Deny all client-side updates on the Cliente collection                                                       //
Pesquisas.deny({                                                                                                // 10
    insert: function insert() {                                                                                 // 11
        return false;                                                                                           // 11
    },                                                                                                          // 11
    // permite insert                                                                                           //
    update: function update() {                                                                                 // 12
        return false;                                                                                           // 12
    },                                                                                                          // 12
    remove: function remove() {                                                                                 // 13
        return false;                                                                                           // 13
    }                                                                                                           // 13
});                                                                                                             // 10
Pesquisas.allow({                                                                                               // 15
    insert: function insert() {                                                                                 // 16
        return true;                                                                                            // 16
    },                                                                                                          // 16
    update: function update() {                                                                                 // 17
        return true;                                                                                            // 17
    },                                                                                                          // 17
    remove: function remove() {                                                                                 // 18
        return true;                                                                                            // 18
    }                                                                                                           // 18
});                                                                                                             // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server_imports.js":["./server/methods.js","./server/publications.js","./pesquisas.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/pesquisas/server_imports.js                                                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.import('./server/methods.js');module.import('./server/publications.js');module.import('./pesquisas.js');
                                                                                                                // 2
                                                                                                                // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"sincronizacao":{"server":{"methods.js":["meteor/meteor","meteor/http","../../pesquisas/pesquisas",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/sincronizacao/server/methods.js                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var HTTP;module.import('meteor/http',{"HTTP":function(v){HTTP=v}});var Pesquisas;module.import('../../pesquisas/pesquisas',{"Pesquisas":function(v){Pesquisas=v}});/**
 * Created by lucas on 9/29/16.                                                                                 //
 */                                                                                                             //
                                                                                                                // 4
                                                                                                                // 5
                                                                                                                // 6
                                                                                                                //
var API = Meteor.settings['public'].api;                                                                        // 8
                                                                                                                //
var URLS = {                                                                                                    // 10
    login: API.login,                                                                                           // 11
    salvar_entrevista: API.salvar_entrevista,                                                                   // 12
    pesquisas: API.pesquisas                                                                                    // 13
};                                                                                                              // 10
                                                                                                                //
Meteor.methods({                                                                                                // 16
    sincronizarPesquisas: function sincronizarPesquisas(_ref) {                                                 // 17
        var url = _ref.url;                                                                                     // 17
        var options = _ref.options;                                                                             // 17
                                                                                                                //
        return HTTP.post(url, options);                                                                         // 18
    },                                                                                                          // 19
    sincronizarSalvarEntrevistas: function sincronizarSalvarEntrevistas(_ref2) {                                // 21
        var url = _ref2.url;                                                                                    // 21
        var options = _ref2.options;                                                                            // 21
                                                                                                                //
        return HTTP.post(url, options);                                                                         // 22
    }                                                                                                           // 23
});                                                                                                             // 16
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"server_imports.js":["./server/methods",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/sincronizacao/server_imports.js                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.import('./server/methods');/**                                                                           //
 * Created by lucas on 9/29/16.                                                                                 //
 */                                                                                                             //
                                                                                                                // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"token":{"server_imports.js":["./token.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/token/server_imports.js                                                                          //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.import('./token.js');                                                                                    // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"token.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/token/token.js                                                                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({Token:function(){return Token}});/**                                                             //
 * Created by lucas on 8/14/16.                                                                                 //
 */                                                                                                             //
var Token = new Ground.Collection('token', { connection: null });                                               // 4
                                                                                                                //
// Deny all client-side updates on the Cliente collection                                                       //
Token.deny({                                                                                                    // 7
    insert: function insert() {                                                                                 // 8
        return false;                                                                                           // 8
    },                                                                                                          // 8
    // permite insert                                                                                           //
    update: function update() {                                                                                 // 9
        return false;                                                                                           // 9
    },                                                                                                          // 9
    remove: function remove() {                                                                                 // 10
        return false;                                                                                           // 10
    }                                                                                                           // 10
});                                                                                                             // 7
Token.allow({                                                                                                   // 12
    insert: function insert() {                                                                                 // 13
        return true;                                                                                            // 13
    },                                                                                                          // 13
    update: function update() {                                                                                 // 14
        return true;                                                                                            // 14
    },                                                                                                          // 14
    remove: function remove() {                                                                                 // 15
        return true;                                                                                            // 15
    }                                                                                                           // 15
});                                                                                                             // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"server":{"api.js":["../../api/pesquisas/server_imports","../../api/token/server_imports","../../api/sincronizacao/server_imports",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/startup/server/api.js                                                                                //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.import("../../api/pesquisas/server_imports");module.import("../../api/token/server_imports");module.import("../../api/sincronizacao/server_imports");
                                                                                                                // 2
                                                                                                                // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"browser-policy.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/startup/server/browser-policy.js                                                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );                                         //
BrowserPolicy.content.allowSameOriginForAll();                                                                  // 2
BrowserPolicy.content.allowFontDataUrl(); // Carregar fontes                                                    // 3
BrowserPolicy.content.disallowInlineScripts(); // Desabilita a tag <script> no html                             // 4
BrowserPolicy.content.disallowEval(); // nao permite uso de eval                                                // 5
// BrowserPolicy.content.allowEval();                                                                           //
BrowserPolicy.content.allowOriginForAll('*');                                                                   // 7
//BrowserPolicy.content.disallowInlineStyles()                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fixtures.js":["../../api/pesquisas/pesquisas",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/startup/server/fixtures.js                                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Pesquisas;module.import('../../api/pesquisas/pesquisas',{"Pesquisas":function(v){Pesquisas=v}});console.log("Iniciando o arquivo fixtures.js");
                                                                                                                //
                                                                                                                // 3
                                                                                                                //
return;                                                                                                         // 5
                                                                                                                //
var pesquisasRemovidas = Pesquisas.remove({});                                                                  // 7
                                                                                                                //
console.log('Pesquisas removidas = ' + pesquisasRemovidas);                                                     // 9
                                                                                                                //
var existePesquisa = Pesquisas.find().count() > 0;                                                              // 11
                                                                                                                //
// Insere ao menos uma pesquisa para fazer os testes                                                            //
if (!existePesquisa) {                                                                                          // 14
                                                                                                                //
    var id = Pesquisas.insert({                                                                                 // 16
        cidade: "Itabirito",                                                                                    // 17
        entrevistadores: ['entrevistador1-id'],                                                                 // 18
        status: 'aberta',                                                                                       // 19
        bairros: ['bairro1', 'bairro2']                                                                         // 20
    });                                                                                                         // 16
    var id2 = Pesquisas.insert({                                                                                // 22
        cidade: "Belo Horizote",                                                                                // 23
        entrevistadores: ['entrevistador1-id'],                                                                 // 24
        status: 'aberta',                                                                                       // 25
        bairros: ['São Francisco', 'Ouro Preto']                                                                // 26
    });                                                                                                         // 22
                                                                                                                //
    console.log('Pesquisa inserida = ' + id);                                                                   // 29
}                                                                                                               // 31
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./browser-policy","./fixtures","./api",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/startup/server/index.js                                                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.import('./browser-policy');module.import('./fixtures');module.import('./api');                           // 1
                                                                                                                // 2
                                                                                                                // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},"server":{"main.js":["/imports/startup/server",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// server/main.js                                                                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.import('/imports/startup/server');                                                                       // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
