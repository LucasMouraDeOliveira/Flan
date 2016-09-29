abstract class Entity {
    protected x_pos: number;
    protected y_pos: number;
    proctected z_pos: number;
    
    // constructor //
    protected Entity(x_pos: number, y_pos: number, z_pos: number) {
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.z_pos = z_pos;
    }

    // accessors //
    public get_x_pos(): number {
        return this.x_pos;
    }

    public set_x_pos(new_x_pos: number) {
        this.x_pos = new_x_pos
    }

    public get_y_pos(): number {
        return this.y_pos;
    }

    public set_y_pos(new_y_pos: number) {
        this.x_pos = new_y_pos;
    }

    public get_z_pos(): number {
        return this.z_pos;
    }

    public set_y_pos(new_y_pos: number) {
        this.z_pos = new_z_pos;
    }
}