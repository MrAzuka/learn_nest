import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PAGINATION_DEFAULT_PAGE_SIZE } from 'src/common/util/common.constants';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto)
    return await this.userRepository.save(user);
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, offset } = paginationDto
    return await this.userRepository.find({
      skip: offset,
      take: limit ?? PAGINATION_DEFAULT_PAGE_SIZE.USER
    });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id })

    if (!user) {
      throw new NotFoundException("User not found")
    }
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // The preload loads the data from the entity, creates a new one with the updated data then replaces all the original data when i save.
    const user = await this.userRepository.preload({ id, ...updateUserDto })

    if (!user) {
      throw new NotFoundException("User not found")
    }

    return this.userRepository.save(user)
  }

  async remove(id: number) {
    const user = await this.findOne(id)

    return this.userRepository.remove(user)
  }
}
