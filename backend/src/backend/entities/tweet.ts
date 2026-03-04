import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Users } from "./users";

@Entity()
export class Tweet {
    @PrimaryGeneratedColumn()
    public id!: number;

    @ManyToOne(type => Users, referenceUser => referenceUser.id)
    public referenceUser!: Users;

    @Column({nullable: true })
    public title!: string;

    @Column()
    public content!: string;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    public date!: Date;

    @Column({nullable: true })
    public imageUrl!: string;
}