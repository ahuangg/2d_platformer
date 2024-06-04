import { PlayerStates, PlayerAnimations, PlayerTweens } from "../PlayerController";
import Input from "../../../Wolfie2D/Input/Input";
import { FizzRun_Controls } from "../../FizzRun_Controls";
import PlayerState from "./PlayerState";

export default class Walk extends PlayerState {

	onEnter(options: Record<string, any>): void {
        this.parent.speed = this.parent.MIN_SPEED;
        this.owner.animation.playIfNotAlready(PlayerAnimations.RUNNING_RIGHT);
	}

	update(deltaT: number): void {
        // Call the update method in the parent class - updates the direction the player is facing
        super.update(deltaT);

        // Get the input direction from the player controller
		let dir = this.parent.inputDir;

        // If the player is not moving - transition to the Idle state
		if(dir.isZero()){
			this.finished(PlayerStates.IDLE);
		} 
        // If the player hits the jump key - transition to the Jump state
        else if (Input.isJustPressed(FizzRun_Controls.JUMP)) {
            this.owner.tweens.play(PlayerTweens.FLIP);
            this.finished(PlayerStates.JUMP);
        } 
        // If the player is not on the ground, transition to the fall state
        else if (!this.owner.onGround && this.parent.velocity.y !== 0) {
            this.finished(PlayerStates.FALL);
        }
        // Otherwise, move the player
        else {
            // Update the vertical velocity of the player
            this.parent.velocity.y += this.gravity*deltaT; 
            this.parent.velocity.x = dir.x * this.parent.speed
            this.owner.move(this.parent.velocity.scaled(deltaT));
        }

	}

	onExit(): Record<string, any> {
		this.owner.animation.stop();
		return {};
	}
}