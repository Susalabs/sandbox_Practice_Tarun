const {User}=require('../models/index')
const {Officer}=require('../models/index')
class UserRepository {
    async createUser(data) {
        try {
            console.log(User);
            const user = await User.create(
                data
            )
            return user;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async deleteUser(userId) {
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async updateUser(userId, data) {
        try {

            return await User.update(data, {
                where: {
                    id: userId
                },
            })
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }

    async getUser(userId) {
        try {
            const user = await User.findByPk(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
    async getAllUser() {
        try {
            const users = await Officer.findAll();
            return users;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports=UserRepository;