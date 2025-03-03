import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class PostSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(User);

    const user = await repository.findOneBy({
      userName: 'admin',
    });

    const postFactory = await factoryManager.get(Post);


    /* 
    await factoryManager
      .get(Post)
      .createMany(10, { user, title: () => faker.lorem.words(5), content: () => faker.lorem.paragraph() });
    */
    await postFactory.saveMany(2, { user });
  }
}
