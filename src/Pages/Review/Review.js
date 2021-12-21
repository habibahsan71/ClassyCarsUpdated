import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hoocks/useFirebase";


const Review = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useFirebase();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data);
        alert('Review Posted')
    };
    return (
        <div className='text-center '>
            <h3 className="my-3">Give Us FeedBack About Our Services</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field w-50 my-1"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field w-50 my-1"
                    name="name"
                    value={user?.name}
                    placeholder="name"
                    type="name"
                    {...register("name", { required: true })}
                />
                <br />
                <input
                    className="input-field w-50 my-1"
                    name="rating"
                    value={user?.rating}
                    placeholder="rate between 1-5"
                    type="number"
                    {...register("rating", { required: true })}
                />
                <br />
                <input
                    className="input-field w-50 my-1"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    );
};

export default Review;