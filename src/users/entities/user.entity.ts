import { EntityDates } from "src/common/embeded/entity-dates.embeded";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  // Did this because i will be using this property in several entities, also the prefix must always be set to false
  @Column(() => EntityDates, { prefix: false })
  registryDate: EntityDates
}
