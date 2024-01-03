<aside class="main-sidebar">
    <section class="sidebar">
        <div class="user-panel">
            <div class="pull-left image">
                <img src="{{ Auth::user()->avatar }}" class="img-circle" alt="">
            </div>
            <div class="pull-left info">
                <p>{{ Auth::user()->username }}</p>
                <a href="#"><i class="fa fa-circle text-success"></i> {{ trans('sentences.online') }}</a>
            </div>
        </div>
        <form action="#" method="get" class="sidebar-form" id="sidebar-search-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="{{ trans('sentences.search') }}...">
                <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
            </button>
          </span>
            </div>
        </form>
        <ul class="sidebar-menu" data-widget="tree">
            <li><a href="{{ route('admin.products.index') }}"><i class="fa fa-product-hunt" aria-hidden="true"></i> <span>{{ trans('sentences.manage_products') }}</span></a></li>
            <li><a href="{{ route('suppliers.index') }}"><i class="fa fa-list-alt" aria-hidden="true"></i> <span>{{ trans('sentences.manage_suppliers') }}</span></a></li>
        </ul>
    </section>
</aside>
