<template>
    <div class="container-fluid" id="form">
        <form class="container-fluid wrapper-form p-5 mt-5 rounded-4" @submit.prevent="handleSubmit">
            <label>Email</label>
            <input type="email" class="form-control col-6 mt-2 mb-3" required v-model="email">
            <label>Password</label>
            <input type="password" class="form-control col-6 mt-2 mb-1" required v-model="password">
            <span v-if="passwordError" class="mb-2 text-danger">{{ passwordError }}</span><br>
            <label class="mb-2 mt-2">Role</label>
            <select class="form-select mb-3" v-model="role">
                <option value="web-developer">Web Developer</option>
                <option value="software-developer">Software Developer</option>
                <option value="graphic-designer">Graphic Designer</option>
                <option value="game-developer">Game Developer</option>
            </select>    
            <div class="skills mt-5">
                <label class="mb-3">skills</label><br>
                <input class="form-control" placeholder="Add" type="text" v-model="tempSkill" @keyup.alt="addSkill">
                <div v-for="skill in skills" :key="skill" class="pill">
                    <p class="skill" @click="deleteSkill(skill)">{{ skill }}</p>
                </div>
            </div>
            <div class="term mt-5 mb-5">
                <input type="checkbox" required v-model="term">
                <label class="px-2" style="font-size: 13px; ">Accept terms and conditions</label>
            </div>
            <div>
                <button class="btn btn-primary">Create an Account</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                form: [],
                email: '',
                password: '',
                role: 'web-developer',
                term: false,
                tempSkill: '',
                skills: [],
                passwordError: ''
            }
        },

        methods: {
            addSkill(e){
                if(e.key === ',' && this.tempSkill) {
                    if(!this.skills.includes(this.tempSkill)){
                        this.skills.push(this.tempSkill); 
                    }
                    this.tempSkill = "";
                }
            },

            deleteSkill(skill){
                this.skills = this.skills.filter((item) => {
                    return skill != item;
                })
            },

            handleSubmit(){
                this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 characters'
                if(!this.passwordError){
                    this.form.push(
                    {
                        email: this.email,
                        password: this.password,
                        role: this.role,
                        skill: this.skills,
                        term: this.term                 
                    }
                )
                console.log(this.form);
                console.log('form submitted');
                    this.email = "",
                    this.password = "",
                    this.role = "",
                    this.skills = "",
                    this.term = ""
                }
            }
        },  
    }
</script>
    
<style scoped>

    #id {
        width: 100vw;
    }
    .wrapper-form {
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    }

    form {
        width: 50%;
        background-color:white;
    }
    .skill {
        text-transform: uppercase;
    }
    label {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
        color: rgb(99, 98, 98);
    }
    .pill {
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 13px 15px 0 15px;
        background-color: #eee;
        border-radius: 10px;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }
    @media (max-width: 800px) {
        #form {
            width: 70%;
            margin: auto;
        }
        form {
            width: 100%;
            margin: auto;
            position: relative;
            left: 25%;
        }
    }
    @media (max-width: 600px) {
        #form {
            width: 80%;
            margin: auto;
        }
        form {
            width: 100%;
            margin: auto;
            position: relative;
            left: 13%;
        }
    }
</style>