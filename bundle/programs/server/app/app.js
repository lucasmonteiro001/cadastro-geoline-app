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
    'pesquisas.sincronizar': function () {                                                                      // 5
        function pesquisasSincronizar() {                                                                       // 4
                                                                                                                //
            console.warn('Nesse momento, os dados devem ser sincronizados com o servidor, conferidos e então' + ' apagar a collection local!');
                                                                                                                //
            Pesquisas.remove({});                                                                               // 10
        }                                                                                                       // 12
                                                                                                                //
        return pesquisasSincronizar;                                                                            // 4
    }(),                                                                                                        // 4
    'pesquisas.insertDummy': function () {                                                                      // 13
        function pesquisasInsertDummy() {                                                                       // 4
            Pesquisas.insert({                                                                                  // 14
                entrevistadores: ['entrevistador1-id'],                                                         // 15
                status: 'aberta',                                                                               // 16
                bairros: ['bairro1', 'bairro2'],                                                                // 17
                entrevistas: [{                                                                                 // 18
                    bairro: "bairro1",                                                                          // 20
                    dataHora: new Date().valueOf(), // timestamp                                                // 21
                    localizacao: {                                                                              // 22
                        latitude: 1,                                                                            // 23
                        longitutde: 1                                                                           // 24
                    }                                                                                           // 22
                }, {                                                                                            // 19
                    bairro: "bairro1",                                                                          // 28
                    dataHora: new Date().valueOf(), // timestamp                                                // 29
                    localizacao: {                                                                              // 30
                        latitude: 1,                                                                            // 31
                        longitutde: 1                                                                           // 32
                    }                                                                                           // 30
                }, {                                                                                            // 27
                    bairro: "bairro2",                                                                          // 36
                    dataHora: new Date().valueOf(), // timestamp                                                // 37
                    localizacao: {                                                                              // 38
                        latitude: 1,                                                                            // 39
                        longitutde: 1                                                                           // 40
                    }                                                                                           // 38
                }]                                                                                              // 35
            });                                                                                                 // 14
        }                                                                                                       // 45
                                                                                                                //
        return pesquisasInsertDummy;                                                                            // 4
    }(),                                                                                                        // 4
    'pesquisas.insert': function () {                                                                           // 46
        function pesquisasInsert(dataObj) {                                                                     // 4
                                                                                                                //
            // dataObj.userId = Meteor.userId();                                                                // 48
                                                                                                                //
            console.warn('implementar pesquisas.insert');return;                                                // 50
                                                                                                                //
            // check(dataObj, Pesquisas.simpleSchema());                                                        // 52
                                                                                                                //
            Pesquisas.insert(dataObj, function (error) {                                                        // 54
                if (error) {                                                                                    // 55
                    console.log(error);                                                                         // 56
                }                                                                                               // 57
            });                                                                                                 // 58
        }                                                                                                       // 59
                                                                                                                //
        return pesquisasInsert;                                                                                 // 4
    }(),                                                                                                        // 4
    'pesquisas.update': function () {                                                                           // 60
        function pesquisasUpdate(id, dataObj) {                                                                 // 4
                                                                                                                //
            console.warn('implementar pesquisas.update');return;                                                // 62
                                                                                                                //
            // check(id, String);                                                                               // 64
            // check(dataObj, Pesquisas.simpleSchema());                                                        // 65
                                                                                                                //
            Pesquisas.update(id, {                                                                              // 67
                $set: dataObj                                                                                   // 68
            });                                                                                                 // 67
        }                                                                                                       // 70
                                                                                                                //
        return pesquisasUpdate;                                                                                 // 4
    }(),                                                                                                        // 4
    'pesquisas.delete': function () {                                                                           // 71
        function pesquisasDelete(id) {                                                                          // 4
                                                                                                                //
            console.warn('implementar pesquisas.insert');return;                                                // 73
            // check(id, String);                                                                               // 74
            Pesquisas.remove(id);                                                                               // 75
        }                                                                                                       // 76
                                                                                                                //
        return pesquisasDelete;                                                                                 // 4
    }()                                                                                                         // 4
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
    // se existe um filtro                                                                                      // 9
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
// var Api = new Restivus({                                                                                     // 3
//     useDefaultAuth: true,                                                                                    // 4
//     prettyJson: true                                                                                         // 5
// });                                                                                                          // 6
                                                                                                                //
                                                                                                                //
// Deny all client-side updates on the Cliente collection                                                       // 9
Pesquisas.deny({                                                                                                // 10
    insert: function () {                                                                                       // 11
        function insert() {                                                                                     // 10
            return false;                                                                                       // 11
        }                                                                                                       // 11
                                                                                                                //
        return insert;                                                                                          // 10
    }(),                                                                                                        // 10
    // permite insert                                                                                           // 11
    update: function () {                                                                                       // 12
        function update() {                                                                                     // 10
            return false;                                                                                       // 12
        }                                                                                                       // 12
                                                                                                                //
        return update;                                                                                          // 10
    }(),                                                                                                        // 10
    remove: function () {                                                                                       // 13
        function remove() {                                                                                     // 10
            return false;                                                                                       // 13
        }                                                                                                       // 13
                                                                                                                //
        return remove;                                                                                          // 10
    }()                                                                                                         // 10
});                                                                                                             // 10
Pesquisas.allow({                                                                                               // 15
    insert: function () {                                                                                       // 16
        function insert() {                                                                                     // 16
            return true;                                                                                        // 16
        }                                                                                                       // 16
                                                                                                                //
        return insert;                                                                                          // 16
    }(),                                                                                                        // 16
    update: function () {                                                                                       // 17
        function update() {                                                                                     // 17
            return true;                                                                                        // 17
        }                                                                                                       // 17
                                                                                                                //
        return update;                                                                                          // 17
    }(),                                                                                                        // 17
    remove: function () {                                                                                       // 18
        function remove() {                                                                                     // 18
            return true;                                                                                        // 18
        }                                                                                                       // 18
                                                                                                                //
        return remove;                                                                                          // 18
    }()                                                                                                         // 18
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
    sincronizarPesquisas: function () {                                                                         // 17
        function sincronizarPesquisas(_ref) {                                                                   // 16
            var url = _ref.url;                                                                                 // 17
            var options = _ref.options;                                                                         // 17
                                                                                                                //
            return HTTP.post(url, options);                                                                     // 18
        }                                                                                                       // 19
                                                                                                                //
        return sincronizarPesquisas;                                                                            // 16
    }(),                                                                                                        // 16
    sincronizarSalvarEntrevistas: function () {                                                                 // 21
        function sincronizarSalvarEntrevistas(_ref2) {                                                          // 16
            var url = _ref2.url;                                                                                // 21
            var options = _ref2.options;                                                                        // 21
                                                                                                                //
            return HTTP.post(url, options);                                                                     // 22
        }                                                                                                       // 23
                                                                                                                //
        return sincronizarSalvarEntrevistas;                                                                    // 16
    }()                                                                                                         // 16
});                                                                                                             // 16
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"server_imports.js":["./server/methods",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// imports/api/sincronizacao/server_imports.js                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.import('./server/methods');/**                                                                           // 1
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
module.export({Token:function(){return Token}});/**                                                             // 1
 * Created by lucas on 8/14/16.                                                                                 //
 */                                                                                                             //
var Token = new Ground.Collection('token', { connection: null });                                               // 4
                                                                                                                //
// Deny all client-side updates on the Cliente collection                                                       // 6
Token.deny({                                                                                                    // 7
    insert: function () {                                                                                       // 8
        function insert() {                                                                                     // 7
            return false;                                                                                       // 8
        }                                                                                                       // 8
                                                                                                                //
        return insert;                                                                                          // 7
    }(),                                                                                                        // 7
    // permite insert                                                                                           // 8
    update: function () {                                                                                       // 9
        function update() {                                                                                     // 7
            return false;                                                                                       // 9
        }                                                                                                       // 9
                                                                                                                //
        return update;                                                                                          // 7
    }(),                                                                                                        // 7
    remove: function () {                                                                                       // 10
        function remove() {                                                                                     // 7
            return false;                                                                                       // 10
        }                                                                                                       // 10
                                                                                                                //
        return remove;                                                                                          // 7
    }()                                                                                                         // 7
});                                                                                                             // 7
Token.allow({                                                                                                   // 12
    insert: function () {                                                                                       // 13
        function insert() {                                                                                     // 13
            return true;                                                                                        // 13
        }                                                                                                       // 13
                                                                                                                //
        return insert;                                                                                          // 13
    }(),                                                                                                        // 13
    update: function () {                                                                                       // 14
        function update() {                                                                                     // 14
            return true;                                                                                        // 14
        }                                                                                                       // 14
                                                                                                                //
        return update;                                                                                          // 14
    }(),                                                                                                        // 14
    remove: function () {                                                                                       // 15
        function remove() {                                                                                     // 15
            return true;                                                                                        // 15
        }                                                                                                       // 15
                                                                                                                //
        return remove;                                                                                          // 15
    }()                                                                                                         // 15
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
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );                                         // 1
BrowserPolicy.content.allowSameOriginForAll();                                                                  // 2
BrowserPolicy.content.allowFontDataUrl(); // Carregar fontes                                                    // 3
BrowserPolicy.content.disallowInlineScripts(); // Desabilita a tag <script> no html                             // 4
BrowserPolicy.content.disallowEval(); // nao permite uso de eval                                                // 5
// BrowserPolicy.content.allowEval();                                                                           // 6
BrowserPolicy.content.allowOriginForAll('*');                                                                   // 7
//BrowserPolicy.content.disallowInlineStyles()                                                                  // 8
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
// Insere ao menos uma pesquisa para fazer os testes                                                            // 13
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
