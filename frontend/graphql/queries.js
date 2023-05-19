// import { gql } from "@apollo/client";

// const GET_ALL_SLUGS = gql`
//  query {
//   posts {
//    data {
//     attributes {
//      slug
//     }
//    }
//   }
//  }
// `;

// const GET_ALL_AUTHORS = gql`
//  query {
//   authors {
//    data {
//     id
//     attributes {
//      name
//      description
//      about
//      createdAt
//      social
//      image {
//       data {
//        attributes {
//         url
//         name
//        }
//       }
//      }
//     }
//    }
//   }
//  }
// `;

// const GET_SINGLE_AUTHOR = gql`
//  query ($id: ID!) {
//   author(id: $id) {
//    data {
//     id
//     attributes {
//      name
//      description
//      social
//      createdAt
//      about
//      image {
//       data {
//        attributes {
//         url
//        }
//       }
//      }
//     }
//    }
//   }
//  }
// `;

// const GET_AUTHORBY_NAME = gql`
//  query ($name1: String!) {
//   authors(filters: { name: { eq: $name1 } }) {
//    data {
//     id
//     attributes {
//      name
//      description
//      social
//      createdAt
//      about
//      image {
//       data {
//        attributes {
//         url
//        }
//       }
//      }
//     }
//    }
//   }
//  }
// `;

// const GET_TAG = gql`
//  query ($id: ID!) {
//   tag(id: $id) {
//    data {
//     id
//     attributes {
//      name
//     }
//    }
//   }
//  }
// `;

// const GET_ALL_TAG = gql`
//  query {
//   tags {
//    data {
//     id
//     attributes {
//      name
//     }
//    }
//   }
//  }
// `;

// const GET_ALL_POST = gql`
//  query {
//   posts {
//    data {
//     id
//     attributes {
//      title
//      description
//      createdAt
//      content
//      slug
//      status
//      image {
//       data {
//        attributes {
//         url
//        }
//       }
//      }
//      author {
//       data {
//        id
//        attributes {
//         name
//         description
//         social
//         about
//         image {
//          data {
//           attributes {
//            url
//           }
//          }
//         }
//        }
//       }
//      }
//      categories {
//       data {
//        id
//        attributes {
//         name
//        }
//       }
//      }
//      tags {
//       data {
//        id
//        attributes {
//         name
//        }
//       }
//      }
//     }
//    }
//   }
//  }
// `;

// const GET_SINGLE_POST = gql`
//  query ($id: ID!) {
//   post(id: $id) {
//    data {
//     id
//     attributes {
//      title
//      description
//      categories {
//       data {
//        id
//        attributes {
//         name
//        }
//       }
//      }
//      author {
//       data {
//        id
//        attributes {
//         name
//         about
//         image {
//          data {
//           id
//           attributes {
//            url
//            name
//           }
//          }
//         }
//        }
//       }
//      }
//     }
//    }
//   }
//  }
// `;

// const GET_POSTBY_SLUG = gql`
//  query ($urlSlug: String!) {
//   posts(filters: { slug: { eq: $urlSlug } }) {
//    data {
//     id
//     attributes {
//      title
//      description
//      createdAt
//      content
//      slug
//      image {
//       data {
//        attributes {
//         url
//        }
//       }
//      }
//      categories {
//       data {
//        id
//        attributes {
//         name
//        }
//       }
//      }
//      author {
//       data {
//        id
//        attributes {
//         name
//         about
//         image {
//          data {
//           id
//           attributes {
//            url
//            name
//           }
//          }
//         }
//        }
//       }
//      }
//      tags {
//       data {
//        id
//        attributes {
//         name
//        }
//       }
//      }
//     }
//    }
//   }
//  }
// `;

// const GET_POSTBY_CATEGORY = gql`
//  query ($category: String!) {
//   posts(filters: { categories: { name: { eq: $category } } }) {
//    data {
//     id
//     attributes {
//      title
//      description
//      createdAt
//      content
//      slug
//      image {
//       data {
//        attributes {
//         url
//        }
//       }
//      }
//      categories {
//       data {
//        id
//        attributes {
//         name
//        }
//       }
//      }
//      author {
//       data {
//        id
//        attributes {
//         name
//         about
//         image {
//          data {
//           id
//           attributes {
//            url
//            name
//           }
//          }
//         }
//        }
//       }
//      }
//      tags {
//       data {
//        id
//        attributes {
//         name
//        }
//       }
//      }
//     }
//    }
//   }
//  }
// `;

// const GET_POSTBY_TAG = gql`
//  query ($tag: String!) {
//   posts(filters: { tags: { name: { eq: $tag } } }) {
//    data {
//     id
//     attributes {
//      title
//      description
//      createdAt
//      content
//      slug
//      image {
//       data {
//        attributes {
//         url
//        }
//       }
//      }
//      categories {
//       data {
//        id
//        attributes {
//         name
//        }
//       }
//      }
//      author {
//       data {
//        id
//        attributes {
//         name
//         about
//         image {
//          data {
//           id
//           attributes {
//            url
//            name
//           }
//          }
//         }
//        }
//       }
//      }
//      tags {
//       data {
//        id
//        attributes {
//         name
//        }
//       }
//      }
//     }
//    }
//   }
//  }
// `;

// const GET_ALL_CATEGORY = gql`
//  query {
//   categories {
//    data {
//     id
//     attributes {
//      name
//     }
//    }
//   }
//  }
// `;

// const GET_CATEGORY = gql`
//  query ($id: ID) {
//   category(id: $id) {
//    data {
//     id
//     attributes {
//      name
//      createdAt
//     }
//    }
//   }
//  }
// `;

// export { GET_ALL_AUTHORS, GET_AUTHORBY_NAME, GET_SINGLE_AUTHOR, GET_POSTBY_CATEGORY, GET_POSTBY_SLUG, GET_ALL_POST, GET_POSTBY_TAG, GET_SINGLE_POST, GET_CATEGORY, GET_ALL_CATEGORY, GET_ALL_SLUGS, GET_ALL_TAG, GET_TAG };
