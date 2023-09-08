const User = require('../models/user')
class UserRepository {
    async createUser(data) {
        try {
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
                    userId: userId
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
                    userId: userId
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
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.log("Something went wrong in Repository Layer");
            throw { error };
        }
    }
}

module.exports = UserRepository;