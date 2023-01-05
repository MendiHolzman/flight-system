import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AudioComponent = class AudioComponent {
    constructor() {
        this.isPlay = false;
        this.audio = new Audio();
    }
    ngOnInit() {
        this.initAudio();
    }
    playStop() {
        if (this.isPlay === false) {
            this.isPlay = true;
            this.audio.play();
        }
        else if (this.isPlay === true) {
            this.isPlay = false;
            this.audio.pause();
        }
    }
    initAudio() {
        this.audio.src = "../../../../../assets/audio/12Mornings.mp3";
        this.audio.load();
    }
};
AudioComponent = __decorate([
    Component({
        selector: 'app-audio',
        templateUrl: './audio.component.html',
        styleUrls: ['./audio.component.css']
    })
], AudioComponent);
export { AudioComponent };
//# sourceMappingURL=audio.component.js.map