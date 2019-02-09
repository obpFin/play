"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@overnightjs/core");
var simple_color_print_1 = require("simple-color-print");
var PlayServer = (function (_super) {
    tslib_1.__extends(PlayServer, _super);
    function PlayServer() {
        var _this = _super.call(this) || this;
        _this._port = 3001;
        _this._SERVER_START_MSG = 'Demo server started on port: ';
        return _this;
    }
    PlayServer.prototype.start = function () {
        var _this = this;
        this.app.listen(this._port, function () {
            simple_color_print_1.cimp(_this._SERVER_START_MSG + _this._port);
        });
    };
    return PlayServer;
}(core_1.Server));
(function () {
    var server = new PlayServer();
    server.start();
})();
//# sourceMappingURL=server.js.map