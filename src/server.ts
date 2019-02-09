import { Server } from '@overnightjs/core';
import { cimp } from 'simple-color-print';

class PlayServer extends Server {
  private _port = 3001;
  private readonly _SERVER_START_MSG = 'Server started on port: ';

  constructor() {
    super();
  }

  public start(): void {
    this.app.listen(this._port, () => {
      cimp(this._SERVER_START_MSG + this._port);
    });
  }
}

/**
 * Start the server
 */
(() => {
  const server = new PlayServer();
  server.start();
})();
