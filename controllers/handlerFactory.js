const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('There is no document with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError(`The document with id ${req.params.id} does not exist`, 404));
    }

    return res.status(200).json({
      status: 'success',
      data: doc
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: doc
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);

    if (popOptions) query = Model.findById(req.params.id).populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError('The document with id  does not exist', 404));
    }

    return res.status(200).json({
      status: 'success',
      data: doc
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res) => {
    let filter = {};

    if (req.params.tourId) filter = { tour: req.params.tourId };

    /* response block */
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .paginate()
      .limitFields();

    const doc = await features.query;

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: doc
    });
  });