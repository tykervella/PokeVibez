const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema ({

  commentText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  commentAuthor: {
    type: String,
    required: true,
    trim: true,
  }, 
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

})


const postSchema = new Schema({
    deckOwner: {
        type: String,
        required: true,
        trim: true,
    },
    deckName: {
        type: String,
        required: true,
        trim: true,
    },
    postText: {
        type: String,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [commentSchema],
    color1: {
        type: String,
        trim: true,
        required: true,
        match: [/^#([A-Fa-f0-9]{6})$/, 'Must match a hex code!'],
    },
    color2: {
        type: String,
        trim: true,
        required: true,
        match: [/^#([A-Fa-f0-9]{6})$/, 'Must match a hex code!'],
      },
      
    color3: {
        type: String,
        trim: true,
        required: true,
        match: [/^#([A-Fa-f0-9]{6})$/, 'Must match a hex code!'],
    },
    color4: {
        type: String,
        trim: true,
        required: true,
        match: [/^#([A-Fa-f0-9]{6})$/, 'Must match a hex code!'],
    },
    color5: {
        type: String,
        trim: true,
        required: true,
        match: [/^#([A-Fa-f0-9]{6})$/, 'Must match a hex code!'],
    },
    image1: {
      type: String,
      trim: true,
      required: true,
    },
    image2: {
      type: String,
      trim: true,
      required: true,
    },
    image3: {
      type: String,
      trim: true,
      required: true,
    },
    image4: {
      type: String,
      trim: true,
      required: true,
    },
    image5: {
      type: String,
      trim: true,
      required: true,
    },
  
});

// Virtual for comment count
postSchema.virtual('commentCount').get(function () {
    return this.comments.length;
  });

const Post = model('Post', postSchema);

module.exports = Post;