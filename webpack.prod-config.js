const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/components',
    'Buttons/index': './src/components/Buttons/',
    'Container/index': './src/components/Container/',
    'Div/index': './src/components/Div/',
    'Wrapper/index': './src/components/Wrapper/',
    'Icons/AddCart': './src/components/Icons/AddCart',
    'Icons/WishListIcon': './src/components/Icons/WishListIcon',
    'Empty/index': './src/components/Empty/',
    'Heading/index': './src/components/Heading/',
    'HeadingH3/index': './src/components/HeadingH3/',
    'HeadingH4/index': './src/components/HeadingH4/',
    'HeadingH5/index': './src/components/HeadingH5/',
    'HeadingH6/index': './src/components/HeadingH6/',
    'Icons/Fav': './src/components/Icons/Fav',
    'Icons/GotoCart': './src/components/Icons/GotoCart',
    'Icons/Refresh': './src/components/Icons/Refresh',
    'Img/index': './src/components/Img/',
    'Input/index': './src/components/Input/',
    'TextArea/index': './src/components/TextArea/',
    'InputField/index': './src/components/InputField/',
    'Label/index': './src/components/Label/',
    'Link/index': './src/components/Link/',
    'Media/index': './src/components/Media/',
    'Pincode/index': './src/components/Pincode/',
    'Product/index': './src/components/Product/',
    'ProductInline/index': './src/components/ProductInline/',
    'ProductInlineWithQuantity/index':
      './src/components/ProductInlineWithQuantity/',
    'Row/index': './src/components/Row/',
    'Section/index': './src/components/Section/',
    'Span/index': './src/components/Span/',
    'Select/index': './src/components/Select/',
    'Text/index': './src/components/Text/',
    'Theme/index': './src/components/Theme/',
    'Forms/LoginForm': './src/components/Forms/LoginForm',
    'Forms/SignupForm': './src/components/Forms/SignupForm',
    'Forms/ForgotPasswordForm': './src/components/Forms/ForgotPasswordForm',
    'Forms/ResetPasswordForm': './src/components/Forms/ResetPasswordForm',
    'Forms/ProfileForm': './src/components/Forms/ProfileForm',
    'Forms/UpdatePasswordForm': './src/components/Forms/UpdatePasswordForm',
    'Forms/PaymentMethodForm': './src/components/Forms/PaymentMethodForm',
    'Forms/FormInput': './src/components/Forms/FormInput',
    'Forms/FeedBackForm': './src/components/Forms/FeedBackForm',
    'Forms/ServiceRequestForm': './src/components/Forms/ServiceRequestForm',
    'ProductDetails/ColorOption': './src/components/ProductDetails/ColorOption',
    'ProductDetails/ProductDesc': './src/components/ProductDetails/ProductDesc',
    'ProductDetails/ServiceDetails':
      './src/components/ProductDetails/ServiceDetails',
    'ProductDetails/Specs': './src/components/ProductDetails/Specs',
    'ProductDetails/SpecList': './src/components/ProductDetails/SpecList',
    'ProductDetails/Spec': './src/components/ProductDetails/Spec',
    'ProductDetails/TitlePrice': './src/components/ProductDetails/TitlePrice',
    'ProductDetails/TitlePriceMobile':
      './src/components/ProductDetails/TitlePriceMobile',
    'Rating/index': './src/components/Rating/',
    'Reviews/index': './src/components/Reviews/',
    'ShippedTo/index': './src/components/ShippedTo/',
    'WishlistBtn/index': './src/components/WishlistBtn/',
    'CategoryCarousel/index': './src/components/CategoryCarousel/',
    'CategoryCarousel/CategoryCarouselItem':
      './src/components/CategoryCarousel/CategoryCarouselItem',
    'PaymentMethod/index': './src/components/PaymentMethod/',
    'Alert/index': './src/components/Alert/',
    'ScreenLoader/index': './src/components/ScreenLoader/',
    'Reviews/WriteReview': './src/components/Reviews/WriteReview',
    'Shimmer/index': './src/components/Shimmer/',
    'ImageShimmer/index': './src/components/ImageShimmer/',
    'ImageShimmerMobile/index': './src/components/ImageShimmerMobile/',
    'SeoContent/index': './src/components/SeoContent/',
    'Forms/ServiceSignUpForm': './src/components/Forms/ServiceSignUpForm',
    'Forms/ModularKitchenForm': './src/components/Forms/ModularKitchenForm',
    'Extend/index': './src/components/Extend/',
    'LoadMore/index': './src/components/LoadMore/',
    'Callus/index': './src/components/Callus/',

    // New Components
    'AbsoluteHtV1/index': './src/newComponents/AbsoluteHtV1/',
    'BodyHtV1/index': './src/newComponents/BodyHtV1/',
    'BoxHtV1/index': './src/newComponents/BoxHtV1/',
    'ButtonHtV1/index': './src/newComponents/ButtonHtV1/',
    'CardHtV1/index': './src/newComponents/CardHtV1/',
    'ColHtV1/index': './src/newComponents/ColHtV1/',
    'ContainerHtV1/index': './src/newComponents/ContainerHtV1/',
    'FixedHtV1/index': './src/newComponents/FixedHtV1/',
    'FlexHtV1/index': './src/newComponents/FlexHtV1/',
    'FormsHtV1/FormInputHtV1': './src/newComponents/FormsHtV1/FormInputHtV1',
    'HeadingHtV1/index': './src/newComponents/HeadingHtV1/',
    'ImageHtV1/index': './src/newComponents/ImageHtV1/',
    'ImageShimmerHtV1/index': './src/newComponents/ImageShimmerHtV1/',
    'Icons/FavHtV1': './src/newComponents/Icons/FavHtV1',
    'InputFieldHtV1/index': './src/newComponents/InputFieldHtV1/',
    'InputFieldErrorHtV1/index': './src/newComponents/InputFieldErrorHtV1/',
    'InputFieldGroupHtV1/index': './src/newComponents/InputFieldGroupHtV1/',
    'InputFieldLabelHtV1/index': './src/newComponents/InputFieldLabelHtV1/',
    'LabelHtV1/index': './src/newComponents/LabelHtV1/',
    'LinkRedirectHtV1/index': './src/newComponents/LinkRedirectHtV1/',
    'LiHtV1/index': './src/newComponents/LiHtV1/',
    'PathHtV1/index': './src/newComponents/PathHtV1/',
    'RelativeHtV1/index': './src/newComponents/RelativeHtV1/',
    'RowHtV1/index': './src/newComponents/RowHtV1/',
    'SectionHtV1/index': './src/newComponents/SectionHtV1/',
    'TextHtV1/index': './src/newComponents/TextHtV1/',
    'TextAreaHtV1/index': './src/newComponents/TextAreaHtV1/',
    'ThemeHtV1/index': './src/newComponents/ThemeHtV1/',
    'ThemeProviderHtV1/index': './src/newComponents/ThemeProviderHtV1/',
    'UlHtV1/index': './src/newComponents/UlHtV1/',
    'WrapperHtV1/index': './src/newComponents/WrapperHtV1/',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    library: 'hometown-components',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'styled-components': {
      commonjs2: 'styled-components'
    },
    react: {
      commonjs2: 'react'
    },
    'react-router-dom': {
      commonjs2: 'react-router-dom'
    },
    'react-stars': {
      commonjs2: 'react-stars'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'image/svg+xml'
        }
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [new UglifyJsPlugin()]
};
